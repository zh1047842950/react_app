#FROM registry.cn-hangzhou.aliyuncs.com/dev_image_list/react_env:v2
FROM node:latest
RUN mkdir /workspace/react_app -p
COPY . /workspace/react_app
WORKDIR /workspace/react_app
RUN npm install \
&& npm run build
CMD npm run start
