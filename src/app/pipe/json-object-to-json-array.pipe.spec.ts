import { JsonObjectToJsonArrayPipe } from './json-object-to-json-array.pipe';

describe('JsonObjectToJsonArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonObjectToJsonArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
