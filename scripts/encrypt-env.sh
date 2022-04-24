#! /bin/zsh

gcloud kms encrypt \
--location global \
--keyring $1 \
--key $2 \
--plaintext-file .env \
--ciphertext-file .env.enc