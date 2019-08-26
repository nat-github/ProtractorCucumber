describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://www.google.com');
    expect(browser.getTitle()).toEqual('Google');
    browser.sleep(3000);
  });
});