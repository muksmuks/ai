const TAG_COLORS = [`blue`, `green`, `purple`, `pink`, `orange`, `teal`, `indigo`, `red`]

const tagColor = (name: string) => {
  const hash = name.split(``).reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return `${TAG_COLORS[hash % TAG_COLORS.length]}.5`
}

export default tagColor
