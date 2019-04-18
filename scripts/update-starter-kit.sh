HOME='.'
rsync -avE --progress  ../lib-starter-kit/ $HOME --exclude='*/' --exclude='lerna.json' --exclude='.huskyrc.json' --exclude='README.md'
rsync -avE --progress  ../lib-starter-kit/.storybook $HOME
rsync -avE --progress  ../lib-starter-kit/scripts/* $HOME/scripts

echo "\n\n\nYou need:\nnpm install && npm run bootstrap && npm run update"
