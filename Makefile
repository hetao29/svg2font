ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
all:
	php fixed.php
	node gen.js

docker-image:
	docker build -t hetao29/svg2font .
docker-push:
	docker push hetao29/svg2font:latest
gen:
	docker run --rm -v ${ROOT_DIR}/fonts:/data/svg2font/fonts -v ${ROOT_DIR}/icon:/data/svg2font/icon hetao29/svg2font:latest sh gen.sh
