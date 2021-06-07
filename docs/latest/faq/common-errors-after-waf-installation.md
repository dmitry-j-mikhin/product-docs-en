# Errors after Wallarm WAF installation

## File Download Scenarios Fail

If your file download scenarios fail after installing a filter node, the issue is in the request size exceeding the limit set in the `client_max_body_size` directive in the Wallarm configuration file.

Change the value in `client_max_body_size` in the directive `location` for the address that accepts the file uploads. Changing only the `location` value protects the main page from getting large requests.

Change the value in `client_max_body_size`:

1. Open for editing the configuration file in the `/etc/nginx-wallarm` directory.
2. Put in the new value:

	```
	location /file/upload {
	 client_max_body_size 16m;
	}
	```

	* `/file/upload` is the address that accepts the file uploads.

Detailed directive description is available in the [official NGINX documentation](https://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size).

## How to fix the errors "signature could not be verified for wallarm-node", "yum doesn't have enough cached data to continue"?

If GPG keys for Wallarm RPM packages are expired, you may get the following error messages:

```
https://repo.wallarm.com/centos/wallarm-node/7/2.18/x86_64/repodata/repomd.xml:
[Errno -1] repomd.xml signature could not be verified for wallarm-node_2.18

One of the configured repositories failed (Wallarm Node for CentOS 7 - 2.18),
and yum doesn't have enough cached data to continue.
```

To fix the problem, please follow the steps:

1. Remove the previously added repository using the command:

	```bash
	sudo yum remove wallarm-node-repo
	```
2. Add a new repository using the command for appropriate CentOS and WAF node versions:

	=== "CentOS 6.x"
		```bash
		# WAF node and postanalytics module of the 2.14 version
		sudo rpm --install https://repo.wallarm.com/centos/wallarm-node/6/2.14/x86_64/Packages/wallarm-node-repo-1-6.el6.noarch.rpm
		```
	=== "CentOS 7.x или Amazon Linux"
		```bash
		# WAF node and postanalytics module of the 2.14 version
		sudo rpm -i https://repo.wallarm.com/centos/wallarm-node/7/2.14/x86_64/Packages/wallarm-node-repo-1-6.el7.noarch.rpm
		
		# WAF node and postanalytics module of the 2.16 version
		sudo rpm -i https://repo.wallarm.com/centos/wallarm-node/7/2.16/x86_64/Packages/wallarm-node-repo-1-6.el7.noarch.rpm
		
		# WAF node and postanalytics module of the 2.18 version
		sudo rpm -i https://repo.wallarm.com/centos/wallarm-node/7/2.18/x86_64/Packages/wallarm-node-repo-1-6.el7.noarch.rpm
		```
	=== "CentOS 8.x"
		```bash
		# WAF node and postanalytics module of the 2.16 version
		sudo rpm -i https://repo.wallarm.com/centos/wallarm-node/8/2.16/x86_64/Packages/wallarm-node-repo-1-6.el8.noarch.rpm
		
		# WAF node and postanalytics module of the 2.18 version
		sudo rpm -i https://repo.wallarm.com/centos/wallarm-node/8/2.18/x86_64/Packages/wallarm-node-repo-1-6.el8.noarch.rpm
		```