{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    python3
  ];

  shellHook = ''
    if [ ! -d ".venv" ]; then
      python -m venv .venv
    fi

    source .venv/bin/activate

    if [ -f "dependencies.txt" ]; then
      pip install -r dependencies.txt
    fi
  '';
}
