// Projector (mmproj) filename pattern. Kept in a dependency-free module so the
// pure device-rules parser can share it without pulling in the store/UI/RN layer
// that multimodalHelpers transitively depends on.
// "mmproj" must start a name segment and either end it ("gemma-3-mmproj.gguf")
// or be followed by a separator ("mmproj-model-f16.gguf").
export const MMProjRegex = /(?:^|[-_./])mmproj(?:[-_.].*)?\.gguf$/i;
