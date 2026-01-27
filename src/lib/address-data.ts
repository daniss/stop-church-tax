// Curated address database for German-speaking cantons with mandatory church tax
// Target cantons: ZH, BS, BE, ZG (all German-speaking, mandatory Kirchensteuer)
// VD and GE removed - no mandatory church tax in those cantons

import { AddressEntry, Canton, Confession, MatchedAddress } from './types';

// Verified addresses for 2026
export const addressBook: AddressEntry[] = [
    // ============================================
    // ZÜRICH (ZH) - Largest expat population
    // ============================================

    // ZH - Catholic (Default)
    {
        id: 'zh-cath-default',
        canton: 'ZH',
        zip: '*',
        confession: 'catholic',
        recipient_name: 'Katholische Kirche im Kanton Zürich',
        addr1: 'Hirschengraben 66',
        addr2: '',
        postal: '8001',
        city: 'Zürich',
        country: 'Schweiz',
        source_note: 'Generalvikariat Zürich',
        updated_at: '2026-01-27',
    },
    // ZH - Reformed (Default)
    {
        id: 'zh-ref-default',
        canton: 'ZH',
        zip: '*',
        confession: 'reformed',
        recipient_name: 'Evangelisch-reformierte Landeskirche des Kantons Zürich',
        addr1: 'Hirschengraben 50',
        addr2: 'Postfach',
        postal: '8024',
        city: 'Zürich',
        country: 'Schweiz',
        source_note: 'Kirchenrat',
        updated_at: '2026-01-27',
    },
    // ZH - Zurich City Catholic (8000-8099)
    {
        id: 'zh-8000-cath',
        canton: 'ZH',
        zip: '8000',
        confession: 'catholic',
        recipient_name: 'Katholisch Stadt Zürich',
        addr1: 'Werdgässchen 26',
        addr2: '',
        postal: '8004',
        city: 'Zürich',
        country: 'Schweiz',
        source_note: 'Stadtverband Katholischer Pfarreien',
        updated_at: '2026-01-27',
    },

    // ============================================
    // BASEL-STADT (BS) - Major expat hub
    // ============================================

    // BS - Catholic
    {
        id: 'bs-cath-default',
        canton: 'BS',
        zip: '*',
        confession: 'catholic',
        recipient_name: 'Römisch-Katholische Kirche Basel-Stadt',
        addr1: 'Lindenberg 10',
        addr2: '',
        postal: '4058',
        city: 'Basel',
        country: 'Schweiz',
        source_note: 'Synodalrat',
        updated_at: '2026-01-27',
    },
    // BS - Reformed
    {
        id: 'bs-ref-default',
        canton: 'BS',
        zip: '*',
        confession: 'reformed',
        recipient_name: 'Evangelisch-reformierte Kirche Basel-Stadt',
        addr1: 'Rittergasse 3',
        addr2: 'Postfach',
        postal: '4001',
        city: 'Basel',
        country: 'Schweiz',
        source_note: 'Kirchenrat (Mailing Address)',
        updated_at: '2026-01-27',
    },

    // ============================================
    // BERN (BE) - Second largest city
    // ============================================

    // BE - Catholic
    {
        id: 'be-cath-default',
        canton: 'BE',
        zip: '*',
        confession: 'catholic',
        recipient_name: 'Römisch-katholische Landeskirche des Kantons Bern',
        addr1: 'Zähringerstrasse 25',
        addr2: '',
        postal: '3012',
        city: 'Bern',
        country: 'Schweiz',
        source_note: 'Landeskirche Bern',
        updated_at: '2026-01-27',
    },
    // BE - Reformed
    {
        id: 'be-ref-default',
        canton: 'BE',
        zip: '*',
        confession: 'reformed',
        recipient_name: 'Reformierte Kirchen Bern-Jura-Solothurn',
        addr1: 'Altenbergstrasse 66',
        addr2: 'Postfach',
        postal: '3000',
        city: 'Bern 22',
        country: 'Schweiz',
        source_note: 'Refbejuso Hauptsitz',
        updated_at: '2026-01-27',
    },

    // ============================================
    // ZUG (ZG) - High-income expat canton
    // ============================================

    // ZG - Catholic (Note: Zug requires local parish, using cantonal as fallback)
    {
        id: 'zg-cath-default',
        canton: 'ZG',
        zip: '*',
        confession: 'catholic',
        recipient_name: 'Katholische Kirche im Kanton Zug',
        addr1: 'Aegeristrasse 4c',
        addr2: '',
        postal: '6300',
        city: 'Zug',
        country: 'Schweiz',
        source_note: 'Kantonale Verwaltung (zgkath.ch)',
        updated_at: '2026-01-27',
    },
    // ZG - Reformed
    {
        id: 'zg-ref-default',
        canton: 'ZG',
        zip: '*',
        confession: 'reformed',
        recipient_name: 'Reformierte Kirche Kanton Zug',
        addr1: 'Bundesstrasse 15',
        addr2: '',
        postal: '6300',
        city: 'Zug',
        country: 'Schweiz',
        source_note: 'Kirchenkanzlei (ref-zug.ch)',
        updated_at: '2026-01-27',
    },
];

/**
 * Find the correct church address for a given canton, ZIP, and confession.
 * Returns exact match if available, otherwise falls back to cantonal address.
 */
export function findAddress(
    canton: Canton,
    zip: string,
    confession: Confession
): MatchedAddress {
    // First, try exact ZIP match
    const exactMatch = addressBook.find(
        (entry) =>
            entry.canton === canton &&
            entry.zip === zip &&
            entry.confession === confession
    );

    if (exactMatch) {
        return {
            found: true,
            exact: true,
            address: exactMatch,
        };
    }

    // Fallback to cantonal default (zip = '*')
    const fallback = addressBook.find(
        (entry) =>
            entry.canton === canton &&
            entry.zip === '*' &&
            entry.confession === confession
    );

    if (fallback) {
        return {
            found: true,
            exact: false,
            address: fallback,
            fallbackMessage:
                "We couldn't find your exact ZIP, but we've routed your letter to the cantonal church office.",
        };
    }

    return {
        found: false,
        exact: false,
        fallbackMessage:
            'Sorry, we do not currently support this canton. Please check back soon.',
    };
}

export const cantonNames: Record<Canton, string> = {
    ZH: 'Zürich',
    BS: 'Basel-Stadt',
    BE: 'Bern',
    ZG: 'Zug',
};

export const confessionNames: Record<Confession, string> = {
    catholic: 'Römisch-katholisch',
    reformed: 'Evangelisch-reformiert',
};
