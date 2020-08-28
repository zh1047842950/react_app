FROM zsf10838438/react_env:v2 as build
RUN mkdir /workspace/react_app -p
COPY . /workspace/react_app
WORKDIR /workspace/react_app
RUN source /etc/profile \
&& npm install --unsafe-perm \
&& npm run build

FROM zsf10838438/zsf_ubuntu:v1
RUN mkdir -p /home/react_app/share_file
WORKDIR /home/react_app
COPY ./start.sh .
RUN chmod u+x *.sh
COPY --from=build /workspace/react_app/build ./build
VOLUME /usr/share/nginx/html/react_app /home/react_app/share_file
#ENTRYPOINT ['/bin/bash','-c']
#CMD ['/home/vue_app/start.sh']

