FROM python:2.7
MAINTAINER Nathan LeClaire <nathan.leclaire@gmail.com>

RUN apt-get update && apt-get install -y wget

WORKDIR /
ADD ./entrypoint.sh /entrypoint.sh

CMD ["/entrypoint.sh"]
