# Supported per-pod's annotation

The [Wallarm Sidecar proxy solution](deployment.md) can be configured via annotations on the per-pod's basis. The list of annotations supported in this solution are described in this document.

!!! info "Priorities of global and per-pod's settings"
    Per-pod's annotations [take precedence](customization.md#configuration-area) over Helm chart values.

Before using an annotation, please add the `sidecar.wallarm.io/` prefix to it, e.g.:

```bash
sidecar.wallarm.io/wallarm-mode: block
```

## Annotation list

| Annotation and corresponding chart value                          | Description                                                      | 
|-------------------------------------|------------------------------------------------------------------|
| **Annotation:** `sidecar-injection-schema`<br><br>`config.injectionStrategy.schema` | [Pattern of Wallarm container deployment](customization.md#single-and-split-deployment-of-containers): `single` (default) or `split`.                                                                                                                                                                                                                                                                     |
| **Annotation:** `sidecar-injection-iptables-enable`<br><br>`config.injectionStrategy.iptablesEnable` | [Whether to start the `iptables` init container](customization.md#incoming-traffic-interception-port-forwarding): `true` (default) or `false`.                                                                                                                                                                                                                                |
| **Annotation:** `wallarm-application`<br><br>No chart value      | [Wallarm application ID](../../../user-guides/settings/applications.md).                                                                                                                                                                                                                                                                           |
| **Annotation:** `wallarm-block-page`<br><br>No chart value | [Blocking page and error code](../../../admin-en/configuration-guides/configure-block-page-and-code.md) to return to blocked requests.                                                                                                                                                        |
| **Annotation:** `wallarm-enable-libdetection`<br><br>`config.wallarm.enableLibDetection`                         | Whether to additionally validate the SQL Injection attacks using the [libdetection](../../../about-wallarm/protecting-against-attacks.md#libdetection-overview) library: `on` or `off` (default).                                                                                                                                                                                                             |
| **Annotation:** `wallarm-fallback`<br><br>`config.wallarm.fallback`                                          | [Wallarm fallback mode](../../../admin-en/configure-parameters-en.md#wallarm_fallback): `on` (default) or  `off`. |
| **Annotation:** `wallarm-mode`<br><br>`config.wallarm.mode`                                              | [Traffic filtration mode](../../../admin-en/configure-wallarm-mode.md): `monitoring` (default), `safe_blocking`, `block` or `off`.                                                                                                                                                                                                                                                                       |
| **Annotation:** `wallarm-mode-allow-override`<br><br>`config.wallarm.modeAllowOverride`                                 | Manages the [ability to override the `wallarm_mode` values via settings in the Cloud](../../../admin-en/configure-wallarm-mode.md#setting-up-priorities-of-the-filtration-mode-configuration-methods-using-wallarm_mode_allow_override): `on` (default), `off` or `strict`.                                                                                                                                                                                       |
| **Annotation:** `wallarm-parser-disable`<br><br>No chart value                                                               | Allows to disable [parsers](../../../user-guides/rules/request-processing.md). The directive values correspond to the name of the parser to be disabled, e.g. `json`. Multiple parsers can be specified, dividing by semicolon, e.g. `json;base64`.                                                                                                                     |
| **Annotation:** `wallarm-parse-response`<br><br>`config.wallarm.parseResponse`                                     | Whether to analyze the application responses for attacks: `on` (default) or `off`. Response analysis is required for vulnerability detection during [passive detection](../../../about-wallarm/detecting-vulnerabilities.md#passive-detection) and [active threat verification](../../../about-wallarm/detecting-vulnerabilities.md#active-threat-verification).                                                                                                                                                                                                                                            |
| **Annotation:** `wallarm-parse-websocket`<br><br>`config.wallarm.parseWebsocket`                                    | Wallarm has full WebSockets support. By default, the WebSockets' messages are not analyzed for attacks. To force the feature, use this annotation: `on` or `off` (default).                                                                                                                                                                                                                                                 |
| **Annotation:** `wallarm-unpack-response`<br><br>`config.wallarm.unpackResponse`                                    | Whether to decompress compressed data returned in the application response: `on` (default) or `off`.                                                                                                                                                                                                                          |
| **Annotation:** `wallarm-upstream-connect-attempts`<br><br>`config.wallarm.upstream.connectAttempts`                          | Defines the number of immediate reconnects to Tarantool or Wallarm API.                                                                                                                                                                                                                                         |
| **Annotation:** `wallarm-upstream-reconnect-interval`<br><br>`config.wallarm.upstream.reconnectInterval`                        | Defines the interval between attempts to reconnect to Tarantool or Wallarm API after the number of unsuccessful attempts has exceeded the threshold for the number of immediate reconnects.                                                                                                                                                                                                                                |
| **Annotation:** `application-port`<br><br>`config.nginx.applicationPort`                                     | Wallarm container awaits for incoming requests to go to this port if [no exposed application pod ports were found](customization.md#application-container-port-auto-discovery).                                                                                             |
| **Annotation:** `nginx-listen-port`<br><br>`config.nginx.listenPort`                                          | Port listened by the Wallarm container. This port is reserved for using by the Wallarm sidecar solution, in cannot be the same as `application-port`.                                                                                                                                                                 |
| **Annotation:** `nginx-http-include`<br><br>No chart value                                                               | Array of paths to the NGINX configuration files that should be [included on the `http` level of NGINX configuration](customization.md#using-custom-nginx-configuration). The file should be mounted to the container and this path should point to the file in the container.                                                                                                            |
| **Annotation:** `nginx-http-snippet`<br><br>No chart value                                                               | [Additional inline config](customization.md#using-custom-nginx-configuration) that should be included on the `http` level of NGINX configuration.                                                                                                                                      |
| **Annotation:** `nginx-server-include`<br><br>No chart value                                                               | Array of paths to the NGINX configuration files that should be [included on the `server` level of NGINX configuration](customization.md#using-custom-nginx-configuration). The file should be mounted to the container and this path should point to the file in the container.                                                                                                            |
| **Annotation:** `nginx-server-snippet`<br><br>No chart value                                                               | [Additional inline config](customization.md#using-custom-nginx-configuration) that should be included on the `server` level of NGINX configuration.                                                                                                                                      |
| **Annotation:** `nginx-location-include`<br><br>No chart value                                                               | Array of paths to the NGINX configuration files that should be [included on the `location` level of NGINX configuration](customization.md#using-custom-nginx-configuration). The file should be mounted to the container and this path should point to the file in the container.                                                                                                            |
| **Annotation:** `nginx-location-snippet`<br><br>No chart value                                                               | [Additional inline config](customization.md#using-custom-nginx-configuration) that should be included on the `location` level of NGINX configuration.                                                                                                                                      |
| **Annotation:** `nginx-extra-modules`<br><br>No chart value                                                               | Array of [additional NGINX modules](customization.md#enabling-additional-nginx-modules) to be enabled.                                                                                                                                                                                                                  |
| **Annotation:** `proxy-extra-volumes`<br><br>No chart value                                                               | [Custom volumes](customization.md#include) to be added to the Pod (array).                                                                                                                                                                                   |
| **Annotation:** `proxy-extra-volume-mounts`<br><br>No chart value                                                               | [Custom volume mounts](customization.md#include) to be added to the `sidecar-proxy` container (JSON object).                                                                                                                                                                               |
| **Annotation:** `proxy-cpu`<br><br>`config.sidecar.containers.proxy.resources.requests.cpu`           | [Requested CPU](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-proxy` container.                                                                                                                                                                                                                                                                                |
| **Annotation:** `proxy-memory`<br><br>`config.sidecar.containers.proxy.resources.requests.memory`        | [Requested memory](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-proxy` container.                                                                                                                                                                                                                                                                             |
| **Annotation:** `proxy-cpu-limit`<br><br>`config.sidecar.containers.proxy.resources.limits.cpu`             | [CPU limit](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-proxy` container.                                                                                                                                                                                                                                                                                    |
| **Annotation:** `proxy-memory-limit`<br><br>`config.sidecar.containers.proxy.resources.limits.memory`          | [Memory limit](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-proxy` container.                                                                                                                                                                                                                                                                                 |
| **Annotation:** `helper-cpu`<br><br>`config.sidecar.containers.helper.resources.requests.cpu`          | [Requested CPU](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-helper` container.                                                                                                                                                                                                                                                                               |
| **Annotation:** `helper-memory`<br><br>`config.sidecar.containers.helper.resources.requests.memory`       | [Requested memory](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-helper` container.                                                                                                                                                                                                                                                                            |
| **Annotation:** `helper-cpu-limit`<br><br>`config.sidecar.containers.helper.resources.limits.cpu`            | [CPU limit](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-helper` container.                                                                                                                                                                                                                                                                                  |
| **Annotation:** `helper-memory-limit`<br><br>`config.sidecar.containers.helper.resources.limits.memory`         | [Memory limit](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-helper` container.                                                                                                                                                                                                                                                                                |
| **Annotation:** `init-iptables-cpu`<br><br>`config.sidecar.initContainers.iptables.resources.requests.cpu`    | [Requested CPU](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-init-iptables` container.                                                                                                                                                                                                                                                                        |
| **Annotation:** `init-iptables-memory`<br><br>`config.sidecar.initContainers.iptables.resources.requests.memory` | [Requested memory](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-init-iptables` container.                                                                                                                                                                                                                                                                     |
| **Annotation:** `init-iptables-cpu-limit`<br><br>`config.sidecar.initContainers.iptables.resources.limits.cpu`      | [CPU limit](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-init-iptables` container.                                                                                                                                                                                                                                                                            |
| **Annotation:** `init-iptables-memory-limit`<br><br>`config.sidecar.initContainers.iptables.resources.limits.memory`   | [Memory limit](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-init-iptables` container.                                                                                                                                                                                                                                                                         |
| **Annotation:** `init-helper-cpu`<br><br>`config.sidecar.initContainers.helper.resources.requests.cpu`      | [Requested CPU](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-init-helper` container.                                                                                                                                                                                                                                                                          |
| **Annotation:** `init-helper-memory`<br><br>`config.sidecar.initContainers.helper.resources.requests.memory`   | [Requested memory](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-init-helper` container.                                                                                                                                                                                                                                                                       |
| **Annotation:** `init-helper-cpu-limit`<br><br>`config.sidecar.initContainers.helper.resources.limits.cpu`        | [CPU limit](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-init-helper` container.                                                                                                                                                                                                                                                                              |
| **Annotation:** `init-helper-memory-limit`<br><br>`config.sidecar.initContainers.helper.resources.limits.memory`     | [Memory limit](customization.md#per-pod-basis-allocation-via-pods-annotations) for the `sidecar-init-helper` container.                                                                                                                                                                                                                                                                           |

There are more [NGINX directives supported by Wallarm](../../../admin-en/configure-parameters-en.md) that are not covered by direct annotations. Nevertheless, you can configure them as well using the [`nginx-*-snippet` and `nginx-*-include` annotations](customization.md#using-custom-nginx-configuration).

## How to use annotations

To apply annotation to a pod, specify it in the `Deployment` object settings of the appropriate application config, e.g.:


```bash
kubectl edit deployment -n <KUBERNETES_NAMESPACE> <APP_LABEL_VALUE>
```

```yaml hl_lines="17"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
        wallarm-sidecar: enabled
      annotations:
        sidecar.wallarm.io/wallarm-mode: block
    spec:
      containers:
        - name: application
          image: kennethreitz/httpbin
          ports:
            - name: http
              containerPort: 80
```