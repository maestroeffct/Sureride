import { StyleSheet } from 'react-native';
import { themes } from '../../../theme/colors';

const colors = themes.light;

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  header: {
    marginTop: 20,
    marginBottom: 24,
  },

  iconBubble: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#CCF8F3', // exact Figma mint-aqua
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  icon: {
    fontSize: 32,
  },

  textBlock: {},

  kicker: {
    fontSize: 18,
    fontWeight: '500',
    color: '#7C7C7C',
    marginBottom: 4,
  },

  title: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 38,
    color: colors.textPrimary,
  },

  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    gap: 16,
  },

  progressBar: {
    height: 3,
    borderRadius: 2,
    width: '22%',
    backgroundColor: '#DADADA',
  },

  heroImage: {
    height: 360,
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    resizeMode: 'cover',
  },

  ctaRow: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%',
  },

  ctaButton: {
    backgroundColor: '#009688',
    width: '100%',
    height: 64,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ctaLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },

  ctaArrow: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  bottomCard: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 24,
    paddingVertical: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
