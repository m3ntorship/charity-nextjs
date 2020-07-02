FROM node:12.16.3-alpine3.11

# create application directory
RUN mkdir -p /charity-storybook
WORKDIR /charity-storybook


# copy application files
COPY storybook-static/ ./storybook-static
# install dependencies
RUN yarn global add serve

CMD ["sh", "-c", "serve /charity-storybook/storybook-static -l $PORT"]