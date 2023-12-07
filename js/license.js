let style=`
  <style>
  .lw-overlay {
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
  }.lw-overlay:target {
    visibility: visible;
    opacity: 1;
  }.lw-popup {
    margin: 70px auto;
    padding: 20px;
    background: #34393e;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 2s ease-in-out;
  }.lw-popup .content {
    max-height: 30%;
    overflow: auto;
  }
  </style>
`
let warning=`
  <div id="popup" class="lw-overlay">
    <div class="lw-popup">
      <div class="lw-content">
        <p align="center" style="font-size: 30px;">
		  <img src="https://momentariymodder.xyz/img/logo.png" width="75%" align="center"><br><br>
          <a >The site is on technical work!</a>
        </p>
      </div>
	  <div id="links" align="center">
	  <a href="https://discord.com/invite/9XqgjRd"><img title="Discord" src="https://momentariymodder.xyz/img/links/discord.png" alt="Discord" width="10%" /></a>
      <a href="https://twitter.com/momentariymoder"><img title="X/Twitter" src="https://momentariymodder.xyz/img/links/x.png" alt="X/Twitter" width="10%" /></a>	  
	  <a href="https://www.curseforge.com/members/momentariymodder"><img title="CurseForge" src="https://momentariymodder.xyz/img/links/curseforge.png" alt="CurseForge" width="10%" /></a> 
	  <a href="https://modrinth.com/user/momentariymodder"><img title="Modrinth" src="https://momentariymodder.xyz/img/links/Modrinth.png" alt="Modrinth" width="10%" /></a> 
	  <a href="https://github.com/MomentariyModder"><img title="GitHub" src="https://momentariymodder.xyz/img/links/GitHub.png" alt="GitHub" width="10%" /></a>
	  <a href="https://patreon.com/momentariymodder"><img title="Patreon" src="https://momentariymodder.xyz/img/links/patreon.png" alt="Patreon" width="10%" /></a>
	  <a href="https://boosty.to/momentariymodder"><img title="Boosty" src="https://momentariymodder.xyz/img/links/boosty.png" alt="Boosty" width="10%" /></a>
	  <a href="https://ko-fi.com/momentariymodder"><img title="Ko-fi" src="https://momentariymodder.xyz/img/links/ko-fi.png" alt="Ko-fi" width="10%" /></a>
    </div>
    </div>
  </div>
`
if(window.tosAgreed!==true){$("head").prepend(style)
$("body").append(warning)}