import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPlayerTeamListComponent } from './full-player-team-list.component';

describe('FullPlayerTeamListComponent', () => {
  let component: FullPlayerTeamListComponent;
  let fixture: ComponentFixture<FullPlayerTeamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullPlayerTeamListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullPlayerTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
