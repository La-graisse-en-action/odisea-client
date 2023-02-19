
import { TouchableOpacity } from 'react-native'
import View from '../../core/StyledView'
import Text from '../../core/StyledText'
import ArrowRight from '../../core/icons/ArrowRight'
import Fade from '../../core/Transitions/Fade'
import { Link } from 'react-router-native'

export default function FormButton({ children, customTheme, asLink, href, ...props }) {

  if (asLink) return (
    <Fade>
      <Link to={href} style={{
        width: 265,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 12,
      }}>
        <View className={`bg-black flex flex-row gap-x-2 items-center justify-center p-0 rounded-xl cursor-pointer h-[45px] ${customTheme}`}>
          <Text className="text-white font-bold text-lg">{children}</Text>
          <ArrowRight className='ml-2' />
        </View>
      </Link>
    </Fade>
  )

  return (
    <TouchableOpacity underlayColor="white" {...props} activeOpacity={0.9} style={{
      shadowColor: "#000",
      width: 265,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
    >
      <Fade>
        <View className={`bg-black flex flex-row gap-x-2 items-center justify-center p-0 rounded-xl cursor-pointer h-[45px] ${customTheme}`}>
          <Text className="text-white font-bold text-lg">{children}</Text>
          <ArrowRight className='ml-2' />
        </View>
      </Fade>
    </TouchableOpacity>
  )
}
