#! /bin/zsh

gcloud kms encrypt \
--location global \
--keyring $1 \
--key $2 \
--plaintext-file $1-staging.json \
--ciphertext-file $1-staging.json.enc