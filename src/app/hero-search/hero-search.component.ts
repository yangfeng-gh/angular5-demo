import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../../providers/hero';
import { HeroService } from '../../providers/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  // 组件类中并没有订阅 heroes$ 这个可观察对象，而是由模板中的 AsyncPipe 完成的
  heroes$: Observable<Hero[]>;
  // Subject 既是可观察对象的数据源，本身也是 Observable。 你可以像订阅任何 Observable 一样订阅 Subject。
  // 你还可以通过调用它的 next(value) 方法往 Observable 中推送一些值，就像 search() 方法中一样。
  // search() 是通过对文本框的 keystroke 事件的事件绑定来调用的。
  private searchTerms = new Subject<string>();

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300), // debounceTime(300) 将会等待，直到新增字符串的事件暂停了 300 毫秒。
      distinctUntilChanged(), //会确保只在过滤条件变化时才发送请求
      switchMap((term: string) => this.heroService.searchHeroes(term)) //会为每个从 debounce 和 distinctUntilChanged 中通过的搜索词调用搜索服务。 它会取消并丢弃以前的搜索可观察对象，只保留最近的。
    );
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
