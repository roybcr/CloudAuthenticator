#! /bin/zsh

gcloud kms decrypt \
--location global \
--keyring $1 \
--key $2 \
--ciphertext-file $1-staging.json.enc \
--plaintext-file $1-staging.json