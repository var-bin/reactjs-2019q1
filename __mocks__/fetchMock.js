export function fetchMock(callback) {
  return global.fetch = jest.fn().mockImplementation(() => callback);
}
