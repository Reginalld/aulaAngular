import { TestBed } from '@angular/core/testing';
import { PessoaService } from './pessoas.service';


describe('PessoasService', () => {
  let service: PessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
