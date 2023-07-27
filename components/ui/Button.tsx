import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/styles";
type Props = {
  children: React.ReactNode;
  onPress: () => void;
  customStyle?: string;
  mode?: string;
};

const Button = ({ children, onPress, customStyle, mode }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-slate-700 rounded-md justify-center items-center p-3 ${customStyle}`}
    >
      <Text className="text-white">{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
