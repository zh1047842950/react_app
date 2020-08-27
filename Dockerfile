FROM zsf10838438/react_env:v2 as build
RUN mkdir /workspace/react_app -p
COPY . /workspace/react_app
WORKDIR /workspace/react_app
RUN source /etc/profile && npm install --unsafe-perm \
&& npm run build

FROM nginx:latest
COPY --from=build /workspace/react_app/build /usr/share/nginx/html
EXPOSE 9090:80


