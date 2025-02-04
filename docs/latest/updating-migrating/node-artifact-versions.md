# Inventory of node artifact versions

This document lists available [patch versions](versioning-policy.md#version-format) of Wallarm node 4.6 in different form-factors. You can track new patch version releases and plan timely upgrades based on this document.

replace by 4.6

## DEB/RPM packages for NGINX

[How to upgrade](nginx-modules.md)

### 4.6.0 (2023-03-28)

* Initial release 4.6, [see changelog](what-is-new.md)

## Helm chart for NGINX Ingress controller

[How to upgrade](ingress-controller.md)

### 4.6.2 (2023-04-10)

* The Helm chart version of the NGINX Ingress controller has been bumped to [4.6.0](https://github.com/kubernetes/ingress-nginx/releases/tag/helm-chart-4.6.0)
* The NGINX Ingress controller version has been bumped to [1.7.0](https://github.com/kubernetes/ingress-nginx/releases/tag/controller-v1.7.0)
* Kubernetes 1.23.x is no longer supported (it is EOL)

### 4.6.0 (2023-03-28)

* Initial release 4.6, [see changelog](what-is-new.md)

## Helm chart for Kong Ingress controller

[How to upgrade](kong-ingress-controller.md)

### 4.6.0 (2023-03-28)

* Initial release 4.6, [see changelog](what-is-new.md)

## Helm chart for Sidecar proxy

[How to upgrade](sidecar-proxy.md)

### 4.6.0 (2023-03-28)

* Initial release 4.6, [see changelog](what-is-new.md)

## NGINX-based Docker image

[How to upgrade](docker-container.md)

### 4.6.1-1 (2023-04-18)

* Now, container terminates when `WALLARM_LABELS` is not provided for deploy token

### 4.6.0-1 (2023-03-28)

* Initial release 4.6, [see changelog](what-is-new.md)

## Envoy-based Docker image

[How to upgrade](docker-container.md)

### 4.6.0-1 (2023-03-28)

* Initial release 4.6, [see changelog](what-is-new.md)

## Amazon Machine Image (AMI)

[How to upgrade](cloud-image.md)

### 4.6.0-1 (2023-03-28)

* Initial release 4.6, [see changelog](what-is-new.md)

## Google Cloud Platform Image

[How to upgrade](cloud-image.md)

### wallarm-node-4-6-20230324-114215 (2023-03-28)

* Initial release 4.6, [see changelog](what-is-new.md)
