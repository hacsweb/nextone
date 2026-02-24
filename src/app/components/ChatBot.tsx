import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router";
import botAvatar from "../../assets/9fccc07dafc86b30d8df975987c666e38f4cbd03.png";

/* ─── Design tokens ─── */
const GOLD = { main: "#C8B692", rgb: "200,182,146" };
const JADE = "#00997A";
const BG = "#0C0C10";

/* ─── Types ─── */
interface PageLink {
  label: string;
  path: string;
}

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  links?: PageLink[];
  quickReplies?: string[];
}

interface BotReply {
  text: string;
  links?: PageLink[];
  quickReplies?: string[];
}

/* ─── Scenario tree & FAQ ─── */

const WELCOME_QUICK_REPLIES = [
  "サービス一覧",
  "IT保守について",
  "Web制作について",
  "写真撮影について",
  "車両サービスについて",
  "料金について",
  "お問い合わせ方法",
];

function getBotReply(input: string): BotReply {
  const lower = input.toLowerCase();

  /* ── サービス一覧 ── */
  if (lower.includes("サービス一覧") || lower.includes("サービス") || lower.includes("何ができる") || lower.includes("メニュー")) {
    return {
      text: "NEXT-ONEでは以下の4つのサービスを提供しています。\n\n① IT保守（TECH）— 月額制の「デジタル番頭」\n② Web制作（WEB）— 企画〜運用まで一気通貫\n③ 写真撮影（PHOTO）— ビジネスドキュメンタリー\n④ 車両コンシェルジュ（CAR）— TECH会員限定\n\nどのサービスについて詳しく知りたいですか？",
      quickReplies: ["IT保守について", "Web制作について", "写真撮影について", "車両サービスについて"],
    };
  }

  /* ── TECH / IT保守 ── */
  if (lower.includes("tech") || lower.includes("it") || lower.includes("保守") || lower.includes("パソコン") || lower.includes("ネットワーク") || lower.includes("デジタル番頭")) {
    return {
      text: "IT保守・TECH事業についてですね！月額制の「デジタル番頭」サービスで、PC・ネットワーク・業務ソフト・プリンターなど、ITに関することなら何でもサポートします。\n\n専任の担当者が御社のIT環境を把握し、トラブル対応から環境改善まで一括でお任せいただけます。",
      links: [{ label: "TECHページを見る", path: "/tech" }],
      quickReplies: ["TECHの料金は？", "契約の流れは？", "対応エリアは？", "他のサービスも見たい"],
    };
  }

  /* ── TECH 料金深掘り ── */
  if (lower.includes("techの料金") || lower.includes("it保守の料金") || lower.includes("月額いくら")) {
    return {
      text: "TECH（IT保守）の料金は、御社の規模やPC台数に応じて月額プランをご提案しています。\n\n・ライトプラン：少人数オフィス向け\n・スタンダードプラン：10名前後の事業所向け\n・カスタムプラン：大規模・複雑な環境向け\n\n詳しい金額はLINEでお気軽にお問い合わせください！",
      links: [{ label: "TECHページを見る", path: "/tech" }],
      quickReplies: ["お問い合わせ方法", "契約の流れは？", "サービス一覧に戻る"],
    };
  }

  /* ── WEB制作 ── */
  if (lower.includes("web") || lower.includes("ホームページ") || lower.includes("サイト") || lower.includes("ウェブ")) {
    return {
      text: "Web制作についてですね！企画・デザイン・コーディング・運用まで一気通貫で対応します。\n\n「作って終わり」ではなく、公開後の更新・改善もサポート。御社の魅力を最大限に引き出すWebサイトを制作します。",
      links: [{ label: "WEBページを見る", path: "/web" }],
      quickReplies: ["WEBの料金は？", "制作期間は？", "実績を見たい", "他のサービスも見たい"],
    };
  }

  /* ── WEB 料金深掘り ── */
  if (lower.includes("webの料金") || lower.includes("サイトの料金") || lower.includes("ホームページの費用")) {
    return {
      text: "Web制作の料金は、ページ数や機能によって変わりますが、中小企業向けに無理のない価格設定を心がけています。\n\n・コーポレートサイト（5ページ程度〜）\n・ランディングページ（1ページ）\n・ECサイト・予約サイト等\n\nまずはお気軽にご相談ください！",
      links: [{ label: "WEBページを見る", path: "/web" }],
      quickReplies: ["お問い合わせ方法", "制作期間は？", "サービス一覧に戻る"],
    };
  }

  /* ── WEB 制作期間 ── */
  if (lower.includes("制作期間") || lower.includes("どのくらいかかる") || lower.includes("納期")) {
    return {
      text: "制作期間はサイトの規模によりますが、目安として：\n\n・ランディングページ：2〜4週間\n・コーポレートサイト：1〜2ヶ月\n・大規模サイト：2〜3ヶ月\n\nスケジュールはご要望に合わせて調整可能です。まずはお気軽にご相談ください！",
      quickReplies: ["WEBの料金は？", "お問い合わせ方法", "サービス一覧に戻る"],
    };
  }

  /* ── PHOTO ── */
  if (lower.includes("写真") || lower.includes("photo") || lower.includes("撮影") || lower.includes("カメラ") || lower.includes("映像") || lower.includes("動画")) {
    return {
      text: "写真・映像撮影についてですね！「ビジネスドキュメンタリー」をコンセプトに、御社の日常や働く人々の「らしさ」を撮影します。\n\n作り込んだ写真ではなく、リアルな魅力を引き出すドキュメンタリースタイルが特徴です。",
      links: [{ label: "PHOTOページを見る", path: "/photo" }],
      quickReplies: ["PHOTOの料金は？", "どんな撮影ができる？", "他のサービスも見たい"],
    };
  }

  /* ── PHOTO 深掘り ── */
  if (lower.includes("photoの料金") || lower.includes("撮影の料金") || lower.includes("撮影費用")) {
    return {
      text: "撮影料金は撮影内容・時間・カット数によって異なります。\n\n・半日撮影プラン\n・終日撮影プラン\n・定期撮影プラン（月1回など）\n\n御社に最適なプランをご提案しますので、まずはLINEでご相談ください！",
      links: [{ label: "PHOTOページを見る", path: "/photo" }],
      quickReplies: ["お問い合わせ方法", "サービス一覧に戻る"],
    };
  }

  /* ── どんな撮影 ── */
  if (lower.includes("どんな撮影")) {
    return {
      text: "主な撮影ジャンルは：\n\n📸 社員・スタッフのポートレート\n📸 オフィス・工場・店舗の環境撮影\n📸 イベント・セミナーの記録\n📸 商品・サービスのイメージ撮影\n📸 採用・広報用の密着ドキュメンタリー\n\nWebサイトやSNS、パンフレットなど幅広くご活用いただけます。",
      links: [{ label: "PHOTOページを見る", path: "/photo" }],
      quickReplies: ["PHOTOの料金は？", "お問い合わせ方法", "サービス一覧に戻る"],
    };
  }

  /* ── CAR ── */
  if (lower.includes("車") || lower.includes("car") || lower.includes("車検") || lower.includes("タイヤ") || lower.includes("車両") || lower.includes("オークション")) {
    return {
      text: "車両コンシェルジュについてですね！TECH会員様限定のサービスで、車に関するあらゆるお悩みをサポートします。\n\n・車検代行\n・中古車オークション代行\n・パーツ取付・交換\n・タイヤ交換\n・その他メンテナンス全般",
      links: [{ label: "CARページを見る", path: "/car" }],
      quickReplies: ["CARの利用条件は？", "IT保守について", "他のサービスも見たい"],
    };
  }

  /* ── CAR 利用条件 ── */
  if (lower.includes("carの利用条件") || lower.includes("会員限定") || lower.includes("carの条件")) {
    return {
      text: "車両コンシェルジュはTECH（IT保守）の会員様限定サービスです。\n\nまずはTECH事業の「デジタル番頭」にご加入いただくと、車両コンシェルジュもご利用いただけるようになります。IT保守と車のサポート、両方お任せいただけるのがNEXT-ONEの強みです！",
      links: [
        { label: "TECHページを見る", path: "/tech" },
        { label: "CARページを見る", path: "/car" },
      ],
      quickReplies: ["TECHの料金は？", "お問い合わせ方法", "サービス一覧に戻る"],
    };
  }

  /* ── 料金（汎用） ── */
  if (lower.includes("料金") || lower.includes("値段") || lower.includes("価格") || lower.includes("費用") || lower.includes("いくら") || lower.includes("予算")) {
    return {
      text: "料金については各サービスによって異なります。どのサービスの料金が気になりますか？\n\n各ページに目安を掲載しておりますが、詳細はLINEでお気軽にお問い合わせください！",
      quickReplies: ["TECHの料金は？", "WEBの料金は？", "PHOTOの料金は？", "お問い合わせ方法"],
    };
  }

  /* ── 契約の流れ ── */
  if (lower.includes("契約") || lower.includes("流れ") || lower.includes("申し込み") || lower.includes("始め方") || lower.includes("手順")) {
    return {
      text: "ご契約までの流れは以下の通りです：\n\n① LINEまたはお電話でご相談\n② ヒアリング・現地調査（無料）\n③ お見積もり・プランのご提案\n④ ご契約・サービス開始\n\nまずはお気軽にLINEでお問い合わせください！初回のご相談・お見積もりは無料です。",
      quickReplies: ["お問い合わせ方法", "対応エリアは？", "サービス一覧に戻る"],
    };
  }

  /* ── 問い合わせ / LINE ── */
  if (lower.includes("line") || lower.includes("問い合わせ") || lower.includes("相談") || lower.includes("連絡") || lower.includes("電話") || lower.includes("メール")) {
    return {
      text: "ご相談はLINE公式アカウントからお気軽にどうぞ！\nページ下部のお問い合わせセクションから、LINEの友だち追加やお電話が可能です。\n\n24時間メッセージ受付中。営業時間内にスタッフが丁寧にご対応いたします。",
      links: [{ label: "お問い合わせへ移動", path: "#contact" }],
      quickReplies: ["営業時間は？", "対応エリアは？", "サービス一覧に戻る"],
    };
  }

  /* ── 営業時間 ── */
  if (lower.includes("営業時間") || lower.includes("対応時間") || lower.includes("何時") || lower.includes("休み") || lower.includes("定休")) {
    return {
      text: "営業時間のご案内：\n\n📅 平日 9:00〜18:00\n※ 緊急のITトラブルはTECH会員様に限り時間外対応も可能です。\n\nLINEは24時間メッセージ受付中です。お気軽にどうぞ！",
      quickReplies: ["お問い合わせ方法", "対応エリアは？", "サービス一覧に戻る"],
    };
  }

  /* ── 対応エリア ── */
  if (lower.includes("愛知") || lower.includes("尾張") || lower.includes("名古屋") || lower.includes("エリア") || lower.includes("地域") || lower.includes("対応エリア") || lower.includes("どこ")) {
    return {
      text: "NEXT-ONEは愛知県尾張エリアを中心に、地域の中小企業様をサポートしています。\n\n主な対応エリア：一宮市・稲沢市・清須市・岩倉市・北名古屋市・小牧市・江南市 など\n\n※ エリア外でもご相談可能な場合がありますので、まずはお気軽にお問い合わせください！",
      quickReplies: ["お問い合わせ方法", "サービス一覧", "契約の流れは？"],
    };
  }

  /* ── 会社概要 ── */
  if (lower.includes("会社") || lower.includes("概要") || lower.includes("next-one") || lower.includes("ネクストワン") || lower.includes("誰")) {
    return {
      text: "NEXT-ONE（ネクストワン）は、愛知県尾張エリアの中小企業を「次のステージ」へ導くパートナーです。\n\nITに詳しい人がいない、ホームページを作りたい、写真で魅力を発信したい——そんなお悩みをまとめて解決します。\n\n「なんでも相談できる、街のデジタル番頭」を目指しています。",
      quickReplies: ["サービス一覧", "対応エリアは？", "お問い合わせ方法"],
    };
  }

  /* ── 実績 / 事例 ── */
  if (lower.includes("実績") || lower.includes("事例") || lower.includes("お客様の声") || lower.includes("導入")) {
    return {
      text: "これまで尾張エリアの様々な業種の企業様にご利用いただいております。\n\n・製造業のIT環境整備\n・飲食店のWebサイト制作\n・建設会社の採用写真撮影\n・小売業のネットワーク構築\n\n各ページで詳しい事例をご紹介していますので、ぜひご覧ください！",
      links: [
        { label: "TECHページ", path: "/tech" },
        { label: "WEBページ", path: "/web" },
        { label: "PHOTOページ", path: "/photo" },
      ],
      quickReplies: ["お問い合わせ方法", "サービス一覧に戻る"],
    };
  }

  /* ── 他のサービス ── */
  if (lower.includes("他のサービス") || lower.includes("戻る") || lower.includes("最初")) {
    return {
      text: "他にも気になるサービスはありますか？お気軽にお選びください！",
      quickReplies: WELCOME_QUICK_REPLIES,
    };
  }

  /* ── ありがとう / 挨拶 ── */
  if (lower.includes("ありがとう") || lower.includes("感謝") || lower.includes("助かり")) {
    return {
      text: "こちらこそありがとうございます！他にもご質問があればいつでもお気軽にどうぞ。\n\nより詳しいご相談はLINE公式アカウントからお待ちしております！",
      quickReplies: ["サービス一覧", "お問い合わせ方法"],
    };
  }

  if (lower.includes("こんにちは") || lower.includes("はじめまして") || lower.includes("hello") || lower.includes("hi")) {
    return {
      text: "こんにちは！NEXT-ONEのデジタル番頭です。どのようなことでお力になれますか？",
      quickReplies: WELCOME_QUICK_REPLIES,
    };
  }

  /* ── フォールバック ── */
  return {
    text: "ありがとうございます！申し訳ございませんが、そちらの内容については詳しくお答えできません。\n\nLINE公式アカウントからお問い合わせいただければ、担当者が丁寧にご対応いたします。",
    quickReplies: ["サービス一覧", "お問い合わせ方法", "対応エリアは？"],
  };
}

/* ─── Component ─── */
export function ChatBot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      text: "こんにちは！NEXT-ONEの「デジタル番頭」です。IT保守・Web制作・写真撮影・車両のことなど、お気軽にご質問ください。",
      quickReplies: WELCOME_QUICK_REPLIES,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        text: trimmed,
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      setTimeout(() => {
        const reply = getBotReply(trimmed);
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          role: "bot",
          text: reply.text,
          links: reply.links,
          quickReplies: reply.quickReplies,
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 600 + Math.random() * 500);
    },
    [isTyping]
  );

  const handleQuickReply = (label: string) => {
    handleSend(label);
  };

  const handlePageLink = (path: string) => {
    // Handle hash-only links (scroll to section on current page)
    if (path.startsWith("#")) {
      setIsOpen(false);
      setTimeout(() => {
        const el = document.getElementById(path.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3">
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{
              width: "min(360px, calc(100vw - 40px))",
              height: "min(520px, calc(100vh - 160px))",
              backgroundColor: BG,
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: `rgba(${GOLD.rgb}, 0.15)`,
              borderRightColor: `rgba(${GOLD.rgb}, 0.15)`,
              borderBottomColor: `rgba(${GOLD.rgb}, 0.15)`,
              borderLeftColor: `rgba(${GOLD.rgb}, 0.15)`,
              boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(${GOLD.rgb}, 0.05)`,
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 shrink-0"
              style={{
                background: `linear-gradient(135deg, rgba(${GOLD.rgb}, 0.08) 0%, rgba(0,153,122,0.05) 100%)`,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: `rgba(${GOLD.rgb}, 0.1)`,
              }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-white/90">
                <img
                  src={botAvatar}
                  alt="デジタル番頭"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="font-mincho font-bold text-[14px] truncate"
                  style={{ color: "#ffffff" }}
                >
                  デジタル番頭
                </p>
                <p className="text-[11px]" style={{ color: JADE }}>
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mr-1"
                    style={{ backgroundColor: JADE, verticalAlign: "middle" }}
                  />
                  オンライン
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                style={{ backgroundColor: `rgba(${GOLD.rgb}, 0.08)` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `rgba(${GOLD.rgb}, 0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `rgba(${GOLD.rgb}, 0.08)`;
                }}
                aria-label="チャットを閉じる"
              >
                <X size={16} style={{ color: GOLD.main }} />
              </button>
            </div>

            {/* Messages area */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: `rgba(${GOLD.rgb}, 0.15) transparent`,
              }}
            >
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div
                    className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "bot" && (
                      <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1 bg-white/90">
                        <img
                          src={botAvatar}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div
                      className="max-w-[75%] rounded-2xl px-3.5 py-2.5 text-[13px]"
                      style={{
                        lineHeight: 1.7,
                        whiteSpace: "pre-line",
                        ...(msg.role === "bot"
                          ? {
                              backgroundColor: `rgba(${GOLD.rgb}, 0.06)`,
                              color: "rgba(255,255,255,0.85)",
                              borderBottomLeftRadius: "4px",
                            }
                          : {
                              background: `linear-gradient(135deg, ${JADE}, #007a62)`,
                              color: "#ffffff",
                              borderBottomRightRadius: "4px",
                            }),
                      }}
                    >
                      {msg.text}

                      {/* Page link buttons inside bubble */}
                      {msg.links && msg.links.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2" style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: `rgba(${GOLD.rgb}, 0.1)` }}>
                          {msg.links.map((link) => (
                            <button
                              key={link.path}
                              onClick={() => handlePageLink(link.path)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] cursor-pointer transition-colors"
                              style={{
                                backgroundColor: `rgba(0,153,122, 0.15)`,
                                color: JADE,
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `rgba(0,153,122, 0.25)`;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = `rgba(0,153,122, 0.15)`;
                              }}
                            >
                              <ExternalLink size={10} />
                              {link.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quick reply buttons below bot message */}
                  {msg.role === "bot" && msg.quickReplies && msg.quickReplies.length > 0 && msg.id === messages[messages.length - 1]?.id && !isTyping && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 ml-9">
                      {msg.quickReplies.map((label) => (
                        <motion.button
                          key={label}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          onClick={() => handleQuickReply(label)}
                          className="px-3 py-1.5 rounded-full text-[12px] cursor-pointer transition-colors"
                          style={{
                            backgroundColor: `rgba(${GOLD.rgb}, 0.08)`,
                            color: GOLD.main,
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: `rgba(${GOLD.rgb}, 0.15)`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = `rgba(${GOLD.rgb}, 0.15)`;
                            e.currentTarget.style.borderColor = `rgba(${GOLD.rgb}, 0.3)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = `rgba(${GOLD.rgb}, 0.08)`;
                            e.currentTarget.style.borderColor = `rgba(${GOLD.rgb}, 0.15)`;
                          }}
                        >
                          {label}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1 bg-white/90">
                    <img
                      src={botAvatar}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="rounded-2xl px-4 py-3 flex items-center gap-1.5"
                    style={{
                      backgroundColor: `rgba(${GOLD.rgb}, 0.06)`,
                      borderBottomLeftRadius: "4px",
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: `rgba(${GOLD.rgb}, 0.4)` }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div
              className="shrink-0 px-3 py-3"
              style={{
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: `rgba(${GOLD.rgb}, 0.1)`,
                backgroundColor: `rgba(${GOLD.rgb}, 0.02)`,
              }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="メッセージを入力..."
                  className="flex-1 rounded-xl px-4 py-2.5 text-[13px] outline-none transition-colors"
                  style={{
                    backgroundColor: `rgba(${GOLD.rgb}, 0.06)`,
                    color: "#ffffff",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: `rgba(${GOLD.rgb}, 0.1)`,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${GOLD.rgb}, 0.25)`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${GOLD.rgb}, 0.1)`;
                  }}
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 shrink-0"
                  style={{
                    backgroundColor: input.trim() ? JADE : `rgba(${GOLD.rgb}, 0.08)`,
                    opacity: input.trim() ? 1 : 0.5,
                  }}
                  aria-label="送信"
                >
                  <Send
                    size={16}
                    style={{ color: input.trim() ? "#fff" : GOLD.main }}
                  />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating avatar button */}
      <AnimatePresence mode="wait">
        {isMinimized ? (
          /* ── Minimized: small pill button ── */
          <motion.button
            key="minimized"
            onClick={() => {
              setIsMinimized(false);
              setIsOpen(true);
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            className="w-14 h-14 rounded-full cursor-pointer overflow-hidden shrink-0 relative"
            style={{
              backgroundColor: `rgba(${GOLD.rgb}, 0.12)`,
              borderWidth: "1px",
              borderStyle: "solid",
              borderTopColor: `rgba(${GOLD.rgb}, 0.2)`,
              borderRightColor: `rgba(${GOLD.rgb}, 0.2)`,
              borderBottomColor: `rgba(${GOLD.rgb}, 0.2)`,
              borderLeftColor: `rgba(${GOLD.rgb}, 0.2)`,
              boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 15px rgba(${GOLD.rgb}, 0.08)`,
            }}
            aria-label="チャットを開く"
          >
            <img
              src={botAvatar}
              alt="デジタル番頭"
              className="w-full h-full object-cover"
            />

          </motion.button>
        ) : (
          /* ── Normal: large avatar with dismiss button ── */
          <motion.div
            key="normal"
            className="relative shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Dismiss (×) button — top-right corner */}
            {!isOpen && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(true);
                }}
                className="absolute top-0 right-0 z-10 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                style={{
                  backgroundColor: `rgba(12,12,16,0.85)`,
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: `rgba(${GOLD.rgb}, 0.25)`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `rgba(${GOLD.rgb}, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `rgba(12,12,16,0.85)`;
                }}
                aria-label="チャットボットを小さくする"
              >
                <X size={13} style={{ color: GOLD.main }} />
              </button>
            )}

            <motion.button
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative w-36 h-36 cursor-pointer overflow-hidden shrink-0"
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "チャットを閉じる" : "チャットを開く"}
            >
              <img
                src={botAvatar}
                alt="デジタル番頭"
                className="w-full h-full object-contain"
              />


            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}