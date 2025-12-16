import { StyleSheet } from 'react-native';

export const filterStyles = StyleSheet.create({
  /* ---------- OVERLAY ---------- */
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },

  backdrop: {
    flex: 1,
  },

  /* ---------- SHEET ---------- */
  sheet: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 28,
    maxHeight: '90%',
  },

  /* ---------- HEADER ---------- */
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  sheetTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },

  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ---------- SECTION ---------- */
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginTop: 22,
    marginBottom: 12,
  },

  /* ---------- PRICE ---------- */
  priceValue: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#00A27F',
    marginTop: 6,
  },

  /* ---------- TAGS ---------- */
  tagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },

  tagActive: {
    backgroundColor: '#00A27F',
    borderColor: '#00A27F',
  },

  tagText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },

  tagTextActive: {
    color: '#FFF',
    fontWeight: '600',
  },

  /* ---------- ACTIONS ---------- */
  actionRow: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 14,
  },

  resetBtn: {
    flex: 1,
    height: 52,
    borderRadius: 30,
    backgroundColor: '#BFF5EC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  resetTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#007E65',
  },

  applyBtn: {
    flex: 1,
    height: 52,
    borderRadius: 30,
    backgroundColor: '#00A27F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  applyTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF',
  },
});
