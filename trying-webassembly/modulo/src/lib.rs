use wasm_bindgen::prelude::*;

pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

#[wasm_bindgen]
pub fn texto() -> String {
	String::from("Bem-vindo ao WebAssembly!")
}

struct Pessoa{
    idade:u8,
    nome:[u8;8],
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
