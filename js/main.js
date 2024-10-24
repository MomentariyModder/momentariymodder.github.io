/*!
 * MomentariyModder Website 7.0.0 by MomentariyModder
 * The source code is available on GitHub!
 */

function copyIP() {
    var before = document.getElementById("ip").innerText;
	var ip = document.getElementById("ip");
	var range = document.createRange();
	range.selectNode(ip);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	// Change Text
	ip.innerText = ip_copied;
	setTimeout(
	function() {
	  ip.innerText = before;
	},1000);
}

window.onload = function() {
  var template = document.getElementById('template').innerHTML;
  var compiled_template = Handlebars.compile(template);
  var rendered = compiled_template({
      server_name: server_name,
      server_ip: server_ip,
	  server_port: server_port
  });
  document.getElementById('target').innerHTML = rendered;

  // MC API
  const status_message = document.querySelector('.server-status')
  const status_container = document.querySelector('.server-status-container')
  MinecraftAPI.getServerStatus(server_ip, {
	port: server_port
  }, function (err, status) {
	if (err) {
	  status_container.innerHTML = "Error getting server status of <span class='info'>" + server_ip + "</span><br><span class='info' style='color:#ff4545;font-size:.5em;'>" + err
	}
	else if (status.online == false) {
	  // If status.last_online returns "undefined". That means the API hasn't accessed your server yet so it doesn't know when it was last online
	  status_container.innerHTML = "Server is <span class='info' style='color:#ff4545'>offline</span>. Last checked " + (status.last_online/60)
	}
	else {
      status_message.innerText = status.players.now;
	}
  });

}

function staff(name, uuid, rank) {
  let staffTemplate = $("#staff-template").html()
    .replaceAll("{{ name }}", name)
    .replaceAll("{{ rank }}", rank)
	.replaceAll("{{ uuid }}", uuid)

  setTimeout(
    function() {
      $("#staff").append(staffTemplate)
    },500)
}

function vote(service, image, link) {
  let voteTemplate = $("#vote-template").html()
    .replaceAll("{{ service }}", service)
    .replaceAll("{{ image }}", image)
	.replaceAll("{{ link }}", link)

  setTimeout(
    function() {
      $("#vote").append(voteTemplate)
    },500)
}


var gitalk = new Gitalk({
  clientID: 'Ov23lisVQnQRvMLqQSq2',
  clientSecret: '1a704a467a60afe6a81985f609668b337320726f',
  repo: 'momentariymodder.github.io',      // The repository of store comments,
  owner: 'MomentariyModder',
  admin: ['MomentariyModder'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})
  
gitalk.render('gitalk-container')