FROM node:16.14-alpine3.14
WORKDIR /frontend
COPY . /frontend
ARG API_URL
ENV REACT_APP_HOST_IP_ADDRESS $API_URL
RUN yarn
RUN yarn build
EXPOSE 3000