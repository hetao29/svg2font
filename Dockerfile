FROM alpine:3.15

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories \
	&& apk update \
	&& apk add tzdata tree \
	&& ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
	&& echo "Asia/Shanghai" > /etc/timezone
RUN apk add --no-cache \
	nodejs npm

USER root

WORKDIR /data/svg2font

RUN npm i svgtofont
RUN mkdir -p /data/svg2font/svg \
	&& mkdir -p /data/svg2font/fonts \
	&& mkdir -p /data/svg2font/icon_fixed
COPY fixed.js /data/svg2font/
COPY gen.js /data/svg2font/
COPY gen.sh /data/svg2font/
COPY mxiqi.ejs /data/svg2font/
RUN tree /data/svg2font

CMD ["sh /data/svg2font/gen.sh"]
