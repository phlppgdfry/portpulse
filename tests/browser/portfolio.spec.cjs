const { test, expect } = require('@playwright/test');
async function downloaded(page, action) {
  const pending = page.waitForEvent('download'); await action(); const download = await pending;
  const stream = await download.createReadStream(); const chunks=[];
  for await (const chunk of stream) chunks.push(chunk);
  return {name:download.suggestedFilename(), data:Buffer.concat(chunks)};
}
test.beforeEach(async ({page}) => {
  page._errors=[]; page.on('pageerror',error=>page._errors.push(error.message));
});
test.afterEach(async ({page}) => { expect(page._errors).toEqual([]); });

test('contractor evidence, empty search, accessible alerts and exported report', async ({page}) => {
  await page.goto('/');
  const close=page.getByRole('button',{name:/Sluit melding:/});
  const count=await close.count(); expect(count).toBe(3); await close.first().click(); await expect(close).toHaveCount(count-1);
  await page.getByRole('button',{name:'Contractors',exact:true}).click();
  const search=page.getByRole('textbox',{name:'Zoek contractors'});
  await expect(page.getByText('36 minuten langer',{exact:false})).toBeVisible();
  await expect(page.getByText('€8.820',{exact:false})).toBeVisible();
  await search.fill('Noord');
  await expect(page.getByText('Toon minstens twee contractors',{exact:false})).toBeVisible();
  await search.fill('no-such-contractor');
  await expect(page.getByText('Geen contractors gevonden',{exact:false})).toBeVisible();
  await page.getByRole('button',{name:'Wis zoekopdracht'}).click();
  await expect(search).toHaveValue('');
  const file=await downloaded(page,()=>page.getByRole('button',{name:'Exporteer demonstratierapport als CSV'}).click());
  expect(file.name).toMatch(/\.csv$/); expect(file.data.toString()).toContain('EuroTruck');
});
