import { Component } from '@angular/core';
import { TestService } from '@proj1-app/core-services/test.service';

@Component({
  selector: 'proj1-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'proj1';
  public num = 2;

  public constructor(
    private _testService: TestService
  ) {
    this.num = this._testService.getNumber();
  }
}
