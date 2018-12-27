import { injectable } from 'inversify';
import { IProvider } from './IProvider';

@injectable()
export class NameProvider implements IProvider<string> {
    public provide(): string {
        const rnd: number = Math.random();
        return rnd > 0.5 ? "-Earth" : "-Mars";
    }
}