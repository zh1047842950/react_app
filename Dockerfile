FROM registry.cn-hangzhou.aliyuncs.com/dev_image_list/react_env:v2
#FROM node:latest as dev
RUN mkdir /workspace/react_app/ -p
COPY . /workspace/react_app/
WORKDIR /workspace/react_app
#RUN npm install \
RUN source /etc/profile && npm install \
&& npm run build

FROM nginx:latest
COPY --from=dev /workspace/react_app/build /usr/share/nginx/html
EXPOSE 9090:80
