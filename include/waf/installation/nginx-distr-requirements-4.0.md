* Access to the account with the **Administrator** role in Wallarm Console for the [US Cloud](https://us1.my.wallarm.com/) or [EU Cloud](https://my.wallarm.com/)
* SELinux disabled or configured upon the [instructions][configure-selinux-instr]
* Executing all commands as a superuser (e.g. `root`)
* For the request processing and postanalytics on different servers: postanalytics installed on the separate server upon the [instructions][install-postanalytics-instr]
* Access to `https://repo.wallarm.com` to download packages. Ensure the access is not blocked by a firewall
* Access to `https://us1.api.wallarm.com` for working with US Wallarm Cloud or to `https://api.wallarm.com` for working with EU Wallarm Cloud. If access can be configured only via the proxy server, then use the [instructions][configure-proxy-balancer-instr]
* Access to [GCP storage addresses](https://www.gstatic.com/ipranges/goog.json) to download an actual list of IP addresses registered in [allowlisted, denylisted, or graylisted][ip-lists-docs] countries, regions or data centers
* Installed text editor **vim**, **nano**, or any other. In the instruction, **vim** is used
