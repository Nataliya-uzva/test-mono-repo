import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  public getNumber(): number {
    return 10;
  }
}
