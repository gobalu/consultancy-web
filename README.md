# Install Dependencies (MacOS)

## ASDF
- 1. Run the command: `brew install coreutils curl git`
- 2. Run the command: `brew install asdf`
- 3. Run the command: `echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc` (ZSH & Homebrew)
  
## Make
- 1. Run the command: `brew install gpg`
- 2. Run the command: `xcode-select --install` (optional)
- 3. Run the command: `asdf plugin add make`
- 4. Run the command: `asdf install`