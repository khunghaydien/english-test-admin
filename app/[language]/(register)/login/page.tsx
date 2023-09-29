import { getDictionary } from "@/language/get-dictionary"
import { Locale } from "@/language/i18n-config"
const LoginPage = async ({
  params: { language },
}: {
  params: { language: Locale }
}) => {
  const dictionary = await getDictionary(language)
  return (
    <>{dictionary.LB_HOME}</>
  )
}
export default LoginPage