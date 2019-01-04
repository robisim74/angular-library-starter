import { TestBed, ComponentFixture } from '@angular/core/testing';

import { SumComponent, SumService } from '../../src/angular-library-starter';

describe('Component: SumComponent', () => {

    let fixture: ComponentFixture<SumComponent>;
    let comp: SumComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                SumService
            ],
            declarations: [SumComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(SumComponent);
        comp = fixture.componentInstance;
    });

    it('should render the sum', (() => {
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement.textContent).toContain('887');
    }));

});
