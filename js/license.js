/*!
 * MomentariyModder Website 7.0.0 by MomentariyModder
 * The source code is available on GitHub!
 */

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
		  <img src="https://momentariymodder.netlify.app/img/thames/logo.png" width="75%" align="center"><br><br>
          <a >The site is on technical work!</a>
        </p>
      </div>
    </div>
  </div>
`
if(window.tosAgreed!==true){$("head").prepend(style)
$("body").append(warning)}