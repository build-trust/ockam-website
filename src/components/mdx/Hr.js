import { chakra } from "@chakra-ui/react"


const Hr = chakra('hr', {
  baseStyle: {
    mb: 4,
    mt: 4,
    border: 'none',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'grey.500',
  },
})

export default Hr;
