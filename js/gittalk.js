/*!
 * MomentariyModder Website 6.0 by MomentariyModder
 * The source code is available on GitHub!
 */

const gitalk = new Gitalk({
  clientID: 'Ov23lisVQnQRvMLqQSq2',
  clientSecret: '460e4e7081b19f0ea787908333e1a02b12196e83',
  repo: 'momentariymodder.github.io',      // The repository of store comments,
  owner: 'MomentariyModder',
  admin: ['MomentariyModder'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')