import { Component } from '@angular/core';
import { TestService } from '@proj2-app/core-services/test.service';

@Component({
  selector: 'proj2-root',
  templateUrl: './app.component.html',
})
export class App2Component {
  title = 'proj2';

  public constructor(
    private _testService: TestService
  ) {}
}
