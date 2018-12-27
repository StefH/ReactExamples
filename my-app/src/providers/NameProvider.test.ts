import 'reflect-metadata'
import { NameProvider } from './NameProvider';

it('provide', () => {
    const np = new NameProvider();

    const result: string = np.provide();

    expect(result).toContain('-');
});
