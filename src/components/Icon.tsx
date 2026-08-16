import { FiHeart, FiUsers, FiClock, FiHome, FiCheckCircle, FiPlus } from 'react-icons/fi';
import {
	FaMapMarkedAlt,
	FaHeartbeat,
	FaCalendarAlt,
	FaHandHoldingHeart,
	FaUserNurse,
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebook,
	FaTwitter,
	FaInstagram,
} from 'react-icons/fa';
import type { IconName } from '../constants';

const icons: Record<IconName, React.ComponentType<{ className?: string }>> = {
	FiHeart,
	FiUsers,
	FiClock,
	FiHome,
	FiCheckCircle,
	FiPlus,
	FaMapMarkedAlt,
	FaHeartbeat,
	FaCalendarAlt,
	FaHandHoldingHeart,
	FaUserNurse,
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebook,
	FaTwitter,
	FaInstagram,
};

interface Props {
	name: IconName;
	className?: string;
}

export default function Icon({ name, className }: Props) {
	const Component = icons[name];
	return <Component className={className} />;
}
