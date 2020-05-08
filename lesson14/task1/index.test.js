import { sendMessage, setMessage } from './index.js'

it('should get argument name', () => {
    const result = sendMessage(name);

    expect(result).toEqual('Ann, Just learn it! Your GromCode');
});

it('should get argument name', () => {
    const result = setMessage(text);

    expect(result).toEqual('Good job');
});