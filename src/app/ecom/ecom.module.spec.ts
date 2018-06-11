import { EcomModule } from './ecom.module';

describe('EcomModule', () => {
  let ecomModule: EcomModule;

  beforeEach(() => {
    ecomModule = new EcomModule();
  });

  it('should create an instance', () => {
    expect(ecomModule).toBeTruthy();
  });
});
