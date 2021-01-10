export const TEST_ACTION = 'TEST_ACTION'

export function testSagaAction(name: string, componentName: string) {
    const payload = {name, componentName}
    const meta = {pattern: 'TEST_ACTION_EFFECT'}
    return ({type: TEST_ACTION, payload, meta})
}