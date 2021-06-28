import * as core from '@actions/core'

jest.mock('@actions/core')

describe('when running the action',()=>{
const fakeSetOutput=core.setOutput as jest.MockedFunction<typeof core.setOutput>
test('it should set the release-url as output parameter', async()=>{
 await run()
 expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything()) 
})
})